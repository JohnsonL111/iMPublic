import { ProjectService } from '@involvemint/server/core/application-services';
import { CreateProjectDto, Project } from '@involvemint/shared/domain';
import { Controller, Post } from '@nestjs/common';
import { IExactQueryObject } from '@orcha/common/src/lib/query';

@Controller('project')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Post('create')
  async create(query: IExactQueryObject<Project, { id: true; }>, token: string, dto: CreateProjectDto) {
    return this.projectService.create(query, token, dto);
  }
}
