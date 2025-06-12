import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { PurchaseState } from "@/hooks/useSubscriptions";

interface PurchaseButtonProps {
  subscriptionId: string;
  subscriptionName: string;
  purchaseState: PurchaseState;
  onPurchase: (id: string, name: string) => void;
}

const PurchaseButton = ({
  subscriptionId,
  subscriptionName,
  purchaseState,
  onPurchase,
}: PurchaseButtonProps) => {
  const isCurrentLoading =
    purchaseState.isLoading && purchaseState.subscriptionId === subscriptionId;
  const isCurrentSuccess =
    purchaseState.isSuccess && purchaseState.subscriptionId === subscriptionId;

  return (
    <Button
      className={`
        w-full py-3 text-lg font-semibold transition-all duration-300 transform
        ${isCurrentLoading ? "scale-95 cursor-not-allowed" : "hover:scale-105"}
        ${isCurrentSuccess ? "bg-green-500 hover:bg-green-600 scale-105" : ""}
      `}
      onClick={() => onPurchase(subscriptionId, subscriptionName)}
      disabled={purchaseState.isLoading || isCurrentSuccess}
    >
      {isCurrentLoading && (
        <div className="flex items-center justify-center">
          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
          Обработка...
        </div>
      )}

      {isCurrentSuccess && (
        <div className="flex items-center justify-center animate-fade-in">
          <Icon name="CheckCircle" size={20} className="mr-2" />
          Приобретено!
        </div>
      )}

      {!isCurrentLoading && !isCurrentSuccess && (
        <div className="flex items-center justify-center">
          <Icon name="CreditCard" size={20} className="mr-2" />
          Выбрать абонемент
        </div>
      )}
    </Button>
  );
};

export default PurchaseButton;
