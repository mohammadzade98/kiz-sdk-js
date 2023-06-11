import { CreateAxiosDefaults } from 'axios';
import { Profile, ProfileModel } from '../common';
import { BaseService } from './core';

export class ProfilesService extends BaseService<ProfileModel, Profile> {
  constructor(protected readonly path: string, protected readonly options?: CreateAxiosDefaults) {
    super(path, options);
  }
}