import { ProjectService } from '@involvemint/server/core/application-services';
import { CreateProjectDto, DeleteProjectDto, Project } from '@involvemint/shared/domain';
import { Body, Controller, Post, Query } from '@nestjs/common';
import { IExactQueryObject } from '@orcha/common/src/lib/query';

@Controller('project')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Post('create')
  async create(
    @Body() body: {
      query: IExactQueryObject<Project, { id: true }>,
      token: string,
      dto: { spId: string | null }
    }
  ) {
    try {
      const result = await this.projectService.create(
        body.query,
        body.token,
        { spId: body.dto.spId || '' } // Provide a default value ('') when spId is null
      );
      return { success: true, data: result };
    } catch (error) {
      console.error('Error creating project:', error);
      return { success: false, error: error.message };
    }
  }

  
  // @Post('delete')
  // async delete(
  //   @Body() dto: DeleteProjectDto,
  //   @Query() query: IExactQueryObject<{ deletedId: string }, { deletedId: true }>,
  // ) {
  //   try {
  //     //const result = await this.projectService.delete(query, token, dto);
  //     return { success: true, data: result };
  //   } catch (error) {
  //     console.error('Error deleting project:', error);
  //     return { success: false, error: error.message }; // or handle the error as needed
  //   }
  // }
}
