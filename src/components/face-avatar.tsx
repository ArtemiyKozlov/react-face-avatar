import React from 'react';

const FaceAvatar: React.FC<faceAvatarProps> = ({ src }) => {
    return (
        <div>
            <img src={src} alt="avatar" />
        </div>
    );
};

interface faceAvatarProps {
    src: string;
}

export default FaceAvatar;