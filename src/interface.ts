export interface Cv {
  id: number
  createdAt: string
  updatedAt: string
  title: string
  content: CvContent
}

export interface CvContent {
  work: CvWork[]
  skills: CvSkills
  header: CvHeader
  education: CvEducation[]
}

export interface CvWork {
  date: string
  employee: string
  position: string
  description: string
}

export interface CvHeader {
  lang: string
  name: string
  email: string
  phone: string
  github: string
  address: string
  linkedin: string
  driverslic: string
  dateofbirth: string
}

export interface CvSkills {
  db: string
  test: string
  other: string
  tools: string
  server: string
  backend: string
  frontend: string
  programming: string
}

export interface CvEducation {
  date: string
  points: string
  school: string
  education: string
  description: string
}
