export interface PersonBaseVo {
    _id: string;
    title: string | null | undefined;
    nameF: string | null | undefined;
    nameM: string | null | undefined;
    nameL: string | null | undefined;
    cell: string;
    email: string | null | undefined;
    cell2: string;
    email2: string | null | undefined;
    img: string | null | undefined;
    doB: Date;
    doD: Date;
    doA: Date;
    poB: string | null | undefined;
    gender: string | null | undefined;
}