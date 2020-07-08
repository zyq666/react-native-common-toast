import React from 'react';
import RootSiblings, {RootSiblingParent} from 'react-native-root-siblings';
import Toast from './toast';
import {ToastProps, DURATION, ToastType} from './type';

let siblings: RootSiblings | null = null;
let timer: number | null = null;

export const ToastRoot = RootSiblingParent;

export default {
  show(params: string | ToastProps, type: ToastType) {
    const data: ToastProps & {type: ToastType} = {
      duration: type === 'loading' ? DURATION.NONE : DURATION.SHORT,
      type,
      content: '',
    };
    Object.assign(
      data,
      typeof params === 'string' ? {content: params} : params,
    );
    if (siblings) {
      siblings.update(<Toast {...data} />);
      if (timer) {
        clearTimeout(timer);
      }
    } else {
      siblings = new RootSiblings(<Toast {...data} />);
    }
    if (data.duration !== DURATION.NONE) {
      timer = setTimeout(() => {
        siblings?.destroy();
        if (data.onhide) {
          data.onhide();
        }
      }, data.duration);
    }
  },
  success(params: string | ToastProps) {
    this.show(params, 'success');
  },
  info(params: string | ToastProps) {
    this.show(params, 'info');
  },
  fail(params: string | ToastProps) {
    this.show(params, 'fail');
  },
  loading(params: string | ToastProps) {
    this.show(params, 'loading');
  },
  destroy() {
    siblings?.destroy();
  },
};
