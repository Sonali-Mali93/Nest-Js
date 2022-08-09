import { Injectable } from '@nestjs/common';

// interface Blog{
//     name: string,
//     no : number
// }
@Injectable()
export class BlogsService {
  private readonly blogs: any[] = [];
  create(data: any) {
    this.blogs.push(data);
    return this.blogs;
  }
  deleteData(): any[] {
    return this.blogs.pop();
  }
  findData(): any[] {
    return this.blogs;
  }
  //   updateData(data: any): any[] {
  //     return this.blogs.splice(this.blogs[1], 1);
  //   }
}
