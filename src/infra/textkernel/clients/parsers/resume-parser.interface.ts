import {
  ResponseInfoModel,
  StuctureReponseInfoModel,
} from '../tx-kernel.interface';

export interface IResumeParserRequest {
  file: string;
}

export interface ResumeParsingTransaction {
  ParsingResponse: ResponseInfoModel;
  IndexingResponse: ResponseInfoModel;
  // [TODO] Update schema
}

export interface IResumeParserResponse {
  StuctureReponseModelInfo: StuctureReponseInfoModel;
  ResumeParsingTransaction: ResumeParsingTransaction;
}
