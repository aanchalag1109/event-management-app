import { StatusCodes } from 'http-status-codes';
export interface IBaseResponse {
    success: boolean;
    errorCode?: string | number;
    errorData?: string;
    statusCode?: string | number | StatusCodes;
    message?: string;
    item?: any;
}