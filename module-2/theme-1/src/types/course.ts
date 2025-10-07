type TExtraMaterials = {
  type: string;
  content: any;
}

type TLesson = {
  id: string;
  title: string;
  description: string;
  commentsIds: string[];
  content: any;
}

type TCourse = {
  id: string;
  title: string;
  description: string;
  inputOutputExamples: TExtraMaterials[];
  complexityLevel: 'easy' | 'medium' | 'hard';
  tags: string[];
  extraMaterials: TExtraMaterials[];
  lessons: TLesson[];
  commentsIds: string[];
  appointedUsersIds: string[];
  rating: number;
}

type TSearch = {
  search: string;
}
