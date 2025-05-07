export type UserType = {
    id: number,
    name: string,
    status: string,
    photos: PhotosType,
    followed: boolean
};

export type PhotosType = {
    small: string,
    large: string
};

export type MessageType = {
    id: number,
    message: string
};

export type DialogType = {
    id: number,
    name: string
};

