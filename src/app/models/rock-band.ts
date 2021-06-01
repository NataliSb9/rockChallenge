export class RockBand {
    public _id: any;
    public name: string;
    public yearBeginning: number;
    public description: string;
    public video: string;
    public foto: string;

    constructor(id:number,nameBand:string, yearBeginning: number, description: string, video: string, photo: string){
        this._id = id;
        this.name = nameBand;
        this.yearBeginning = yearBeginning;
        this.description = description;
        this.video = video;
        this.foto = photo;
    }
}
