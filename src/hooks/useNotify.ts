import { useQuasar } from 'quasar';
import type { QNotifyCreateOptions } from 'quasar';
// type NotifyProps = {
//   message: string;
//   type?: 'positive' | 'negative' | 'warning' | 'info' | 'ongoing';
//   color?: string;
// };

export const useNotify = () => {
  const $q = useQuasar();

  const notify = ({ type = 'info', ...props }: QNotifyCreateOptions) => {
    $q.notify({
      position: 'top-right',
      type,
      ...props,
    });
  };

  return notify;
};
