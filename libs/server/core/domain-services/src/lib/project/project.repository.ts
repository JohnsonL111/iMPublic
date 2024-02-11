import { Project } from '@involvemint/shared/domain';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IOrchaTypeormRepository } from '@orcha/typeorm';
import { Repository } from 'typeorm';
import { ProjectEntity } from './project.entity';
import { IQuery, IProps } from '@orcha/common';
import { id } from 'date-fns/locale';

@Injectable()
export class ProjectRepository extends IOrchaTypeormRepository<Project> {
  constructor(@InjectRepository(ProjectEntity) protected readonly repo: Repository<Project>) {
    super(repo);
  }

  // extend FindOneOrFail abstract method here
  async findOneOrFail<Q extends IQuery<T>>(id: IdType): Promise<IProps<Entity>>; {
    const entity = this.entities.get(id);
    if (!entity) {
      throw new Error(`Test Entity with ID "${id}" not found.`);
    }
    return // IProps entity here? 
  }
}
