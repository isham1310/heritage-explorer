
"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Loader2, Camera, Upload, X, Wand2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { handleIdentifySite } from "@/app/actions";

export function VisualIdentifier() {
  const { toast } = useToast();
  const [image, setImage] = useState<string | null>(null);
  const [result, setResult] = useState<{ siteName: string; description: string } | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hasCameraPermission, setHasCameraPermission] = useState<boolean | null>(null);
  const [isCameraOpen, setIsCameraOpen] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const stopCamera = useCallback(() => {
    if (videoRef.current && videoRef.current.srcObject) {
      (videoRef.current.srcObject as MediaStream).getTracks().forEach(track => track.stop());
      videoRef.current.srcObject = null;
    }
  },[]);


  useEffect(() => {
    return () => {
      // Stop camera stream when component unmounts
      stopCamera();
    };
  }, [stopCamera]);

  const getCameraPermission = async () => {
    if (typeof navigator.mediaDevices === 'undefined' || !navigator.mediaDevices.getUserMedia) {
      toast({
        variant: 'destructive',
        title: 'Camera Not Supported',
        description: 'Your browser does not support camera access.',
      });
      setHasCameraPermission(false);
      return;
    }
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      setHasCameraPermission(true);
      setIsCameraOpen(true);
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (error) {
      console.error("Error accessing camera:", error);
      setHasCameraPermission(false);
      toast({
        variant: "destructive",
        title: "Camera Access Denied",
        description: "Please enable camera permissions in your browser settings.",
      });
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImage(e.target?.result as string);
        setResult(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleIdentify = async () => {
    if (!image) return;
    setIsLoading(true);
    setResult(null);
    try {
      const identification = await handleIdentifySite({ photoDataUri: image });
      setResult(identification);
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Identification Failed",
        description: "Could not identify the site. Please try another image.",
      });
    }
    setIsLoading(false);
  };
  
  const takePicture = useCallback(() => {
    if (videoRef.current && canvasRef.current) {
      const video = videoRef.current;
      const canvas = canvasRef.current;
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const context = canvas.getContext('2d');
      if(context){
        context.drawImage(video, 0, 0, video.videoWidth, video.videoHeight);
        const dataUrl = canvas.toDataURL('image/jpeg');
        setImage(dataUrl);
        setResult(null);
      }
      setIsCameraOpen(false);
      stopCamera();
    }
  }, [stopCamera]);

  const clearImage = () => {
    setImage(null);
    setResult(null);
    if(fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleCancelCamera = () => {
    setIsCameraOpen(false);
    stopCamera();
  }

  return (
    <Card>
      <CardContent className="p-6 space-y-4">
        {isCameraOpen ? (
          <div className="space-y-4">
            <div className="relative w-full aspect-video rounded-md overflow-hidden border">
              <video ref={videoRef} className="w-full h-full object-cover" autoPlay muted playsInline />
              <canvas ref={canvasRef} className="hidden" />
            </div>
             {hasCameraPermission === false && (
                <Alert variant="destructive">
                  <AlertTitle>Camera Access Required</AlertTitle>
                  <AlertDescription>
                    Please allow camera access to use this feature.
                  </AlertDescription>
                </Alert>
             )}
            <div className="flex gap-2 justify-center">
              <Button onClick={takePicture} disabled={hasCameraPermission === false}>
                <Camera className="mr-2" /> Take Picture
              </Button>
              <Button variant="outline" onClick={handleCancelCamera}>Cancel</Button>
            </div>
          </div>
        ) : image ? (
          <div className="space-y-4">
            <div className="relative group">
              <img src={image} alt="Uploaded site" className="rounded-md w-full object-cover aspect-video" />
              <Button
                variant="destructive"
                size="icon"
                className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                onClick={clearImage}
              >
                <X />
              </Button>
            </div>
            <Button onClick={handleIdentify} disabled={isLoading} className="w-full">
              {isLoading ? <Loader2 className="animate-spin mr-2" /> : <Wand2 className="mr-2" />}
              {isLoading ? 'Analyzing...' : 'Identify this Landmark'}
            </Button>
          </div>
        ) : (
          <div className="flex flex-col sm:flex-row gap-2">
            <Button className="flex-1" onClick={() => fileInputRef.current?.click()}>
              <Upload className="mr-2" /> Upload Photo
            </Button>
            <Input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              className="hidden"
              accept="image/*"
            />
            <Button variant="outline" className="flex-1" onClick={getCameraPermission}>
              <Camera className="mr-2" /> Use Camera
            </Button>
          </div>
        )}

        {result && (
          <Card className="bg-muted/50">
            <CardHeader>
              <CardTitle>{result.siteName}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{result.description}</p>
            </CardContent>
          </Card>
        )}
      </CardContent>
    </Card>
  );
}
