import React, { useEffect } from 'react';
import * as faceapi from 'face-api.js'
import { TinyFaceDetectorOptions, Rect } from 'face-api.js';

const load = faceapi.nets.tinyFaceDetector.loadFromUri('/models');

const FaceAvatar: React.FC<faceAvatarProps> = ({ src, className = '', showOrigin = false, width = 100, height = 100 }) => {
    let imageRef = React.createRef<HTMLImageElement>();
    let origin = React.createRef<HTMLImageElement>();

    useEffect(() => {
        async function extractFace() {
            await load;

            const srcImg = origin.current;
            if (srcImg === null) return;

            const detection = await faceapi.detectSingleFace(srcImg,
                new TinyFaceDetectorOptions({ scoreThreshold: 0.3 }));

            if (!detection)  {
                showOrigin = true;
                return;
            }

            var rect = adjustFaceBox(detection.box);
            const canvases = await faceapi.extractFaces(srcImg, [rect]);
            // const canvases = await faceapi.extractFaces(srcImg, [detection]);
            var result = canvases[0];
            if (imageRef.current) {
                imageRef.current.src = result.toDataURL();
            }
        }
        function adjustFaceBox(box: faceapi.Box): Rect {
            const targetRatio = width / height;
            const currentRatio = box.width / box.height;
            let widRatio = 1;
            let heightRatio = 1
            if (currentRatio < targetRatio) {
                widRatio = targetRatio / currentRatio;
            } else {
                heightRatio = currentRatio / targetRatio;
            }

            return new Rect(box.x - box.width / 2, box.y - box.width / 2, box.width * 2 * widRatio, box.height * 2 * heightRatio);
        }

        extractFace();
    })

    return (
        <>
            <img crossOrigin="anonymous" src={src} alt="sourceImage" hidden={!showOrigin} ref={origin} />
            <img
                hidden={showOrigin}
                alt="avatar"
                ref={imageRef}
                className={className}
                width={width}
                height={height}
                style={className ?  {} : { borderRadius: '50%' }} />
        </>

    );
};

interface faceAvatarProps {
    src: string;
    showOrigin?: boolean;
    className?: string;
    width?: number;
    height?: number;
}

export default React.memo(FaceAvatar);