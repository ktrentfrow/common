/**
 * Work history objects are entities within the system.
 *
 *
 * @example {
 *  "id": "52907745-7672-470e-a803-a2f8feb52941",
 *  "name": "HaloAsset1",
 *  "description": "Halo uas asset",
 *  "assetType": "UAS",
 *  "color": "red",
 * }
 */
export interface IWorkHistory {
    id?: number;
    companyName: string;
    title: string;
    city: string;
    state: string;
    overview: string;
    description: string;
    details: string[];
    technologies: string[];
    startDate: Date;
    endDate?: Date;
    created?: Date;
    updated?: Date;
}