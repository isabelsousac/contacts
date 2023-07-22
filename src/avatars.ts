const avatarSrcs = [
    '/avatars/avatar1.png',
    '/avatars/avatar2.png',
    '/avatars/avatar3.png',
    '/avatars/avatar4.png',
    '/avatars/avatar5.png',
    '/avatars/avatar6.png',
    '/avatars/avatar7.png',
    '/avatars/avatar8.png',
    '/avatars/avatar9.png',
    '/avatars/avatar10.png',
];
  
export function getUniqueAvatarSrc(id: number): string {
    const avatar = avatarSrcs[id % avatarSrcs.length];
    return process.env.PUBLIC_URL + avatar;
}