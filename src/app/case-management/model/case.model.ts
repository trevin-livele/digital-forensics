export interface Case {
    id: number;
    caseName: string;
    description: string;
    creationDateTime: string;
    files: any[]; // You can replace 'any' with the actual type of your files
    devices: any[]; // You can replace 'any' with the actual type of your devices
  }
  
  export interface ApiResponse {
    content: Case[];
    pageNo: number;
    pageSize: number;
    totalElements: number;
    totalPages: number;
    last: boolean;
  }
  