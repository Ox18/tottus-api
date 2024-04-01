type Params = {
  type: string;
  title: string;
  status: number;
  detail: string;
};

export class BaseError extends Error {
  type: string;
  title: string;
  status: number;
  detail: string;

  constructor(params: Params) {
    super(params.detail);

    this.type = params.type;
    this.title = params.title;
    this.status = params.status;
    this.detail = params.detail;
  }
}
