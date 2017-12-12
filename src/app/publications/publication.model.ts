export class Publication {
    cover_i: number;
    has_fulltext: string;
    edition_count: number;
    title: string;
    first_publish_year: string;
    key: string;
}

export class PublicationResponse{
    start: number;
    num_found: number;
    docs: Publication[];
}