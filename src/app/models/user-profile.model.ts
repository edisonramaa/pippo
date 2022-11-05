
import {BaseFtModel} from "../core/lib/model/base-ft.model";

export class UserProfileModel extends BaseFtModel {
  name: string;
  email: string;
  age: string;
  skill: string;
  isAdmin: string;
  rating: number;
  status: boolean;
  balanceCredits:number;
  jobTransactionEntities: any[];
}
