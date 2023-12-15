// ** Components
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import UploadFile from "@/components/ui/upload-file";

const TrackUpload = () => {
  return (
    <>
      <Card className="h-[400px]">
        <CardHeader>
          <CardTitle>Upload a Track</CardTitle>
          <CardDescription>
            Upload a Track (mp3, aac accepted) and an Image. Click save when
            you&apos;re done.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          <UploadFile input="Track File" />
        </CardContent>
        <CardContent className="space-y-2">
          <UploadFile input="Track Image" />
        </CardContent>
      </Card>
    </>
  );
};

export default TrackUpload;
