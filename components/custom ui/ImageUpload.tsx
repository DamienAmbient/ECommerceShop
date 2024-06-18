import { CldUploadWidget } from "next-cloudinary";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";
import Image from "next/image";

interface ImageUploadProps {
    value: string[];
    onChange: (value: string) => void;
    onRemove: (value: string) => void;
}

const ImageUpload: React.FC<ImageUploadProps> = ({
    onChange,
    onRemove,
    value,
}) => {
    const onUpload = (result: any) => {
        onChange(result.info.secure_url);
    };

    return (
        <div>
            <div className=" mb-4 flex flex-wrap items-center gap-4">
                {value.map((url) => (
                    <Image
                        src={url}
                        alt="collection"
                        className=" object-cover rounded-lg"
                        width={200}
                        height={200}
                    ></Image>
                ))}
            </div>
            <CldUploadWidget uploadPreset="xzdmpbkr" onUpload={onUpload}>
                {({ open }) => {
                    return (
                        <Button
                            onClick={() => open()}
                            className=" bg-grey-1 text-white"
                        >
                            <Plus className=" h-4 w-4 mr-2"></Plus>
                            Upload Image
                        </Button>
                    );
                }}
            </CldUploadWidget>
        </div>
    );
};

export default ImageUpload;
