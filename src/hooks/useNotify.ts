import { useQuasar } from 'quasar';
import type { QNotifyCreateOptions } from 'quasar';

export const useNotify = () => {
  const $q = useQuasar();

  const notify = ({ type = 'info', ...props }: QNotifyCreateOptions) => {
    $q.notify({
      position: 'top-right',
      type,
      closeBtn: true,
      ...props,
    });
  };

  return notify;
};
