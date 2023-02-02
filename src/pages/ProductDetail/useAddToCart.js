import { useEffect, useState } from "react";
import { DomainEvents } from "../../domain/DomainEvents";

export function useAddToCart(shoppingCartRepository, data) {
  const [isSendLoading, setIsSendLoading] = useState(false);

  const isButtonDisabled = () =>
    !data.selectedColor || !data.selectedStorage || isSendLoading;

  const save = async () => {
    setIsSendLoading(true);
    await shoppingCartRepository.save(data);
    document.dispatchEvent(new CustomEvent(DomainEvents.shoppingCartAdded));
    setIsSendLoading(false);
  };

  return {
    save,
    isButtonDisabled,
  };
}
