import { ref } from 'vue';
import BaseModal from '@/components/BaseModal.vue';

export function useModal() {
  let modal: any = ref<InstanceType<typeof BaseModal> | null>(null);

  function getModalRef() {
    return modal;
  }

  function setModalRef(el = null) {
    modal = el;
  }

  function closeModal() {
    modal?.emitClose();
  }

  return {
    getModalRef,
    setModalRef,
    closeModal
  };
}

export default useModal;
