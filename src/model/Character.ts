import {Origin} from './Origin';
import {Location} from './Location';

export interface Character {
  image?: string;
  id?: number;
  name?: string;
  status?: string;
  species?: string;
  gender?: string;
  created?: string;

  origin?: Origin;
  location?: Location;
}
