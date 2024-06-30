export default interface IUser {
    email: string;
    name?: string;
    image?: string;
    password: string;
    roles: [
        {
            type: string;
            ref: "Role";
        },
    ];
    createdAt: Date;
}
