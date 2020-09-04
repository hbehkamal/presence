import { user } from "./user.type";

export interface DynamicListType {
  basePath: string;
  hasCreate: boolean;
  hasEdit: boolean;
  hasList: boolean;
  hasShow: boolean;
  history: History;
  location: Location;
  match: object;
  options: object;
  permissions: [];
  resource: string;
  data: user[];
  fields: any;
}
