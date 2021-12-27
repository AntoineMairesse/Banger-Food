export class Category {
  private _id: number;
  private _category: string;
  private _categoryThumb: string;
  private _categoryDescription: string;

  constructor(id: number, category: string, categoryThumb: string, categoryDescription: string) {
    this._id = id;
    this._category = category;
    this._categoryThumb = categoryThumb;
    this._categoryDescription = categoryDescription;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get category(): string {
    return this._category;
  }

  set category(value: string) {
    this._category = value;
  }

  get categoryThumb(): string {
    return this._categoryThumb;
  }

  set categoryThumb(value: string) {
    this._categoryThumb = value;
  }

  get categoryDescription(): string {
    return this._categoryDescription;
  }

  set categoryDescription(value: string) {
    this._categoryDescription = value;
  }
}
