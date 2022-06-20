import {TemplateRef} from '@angular/core';

export interface ProgressConfig {
  replace?: boolean;
  progressId: string;
  replaceWith?: TemplateRef<any>;
  onShow?: () => void;
  onHide?: () => void;
}