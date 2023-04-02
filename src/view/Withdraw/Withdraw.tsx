import { LineChartContainer } from "@/components/Charts";
import { WithdrawForm } from "@/components/Forms";

export const Withdraw = () => {
  return (
    <div class="relative grid grid-cols-1 md:grid-cols-4  mt-20 mx-auto">
      <div class="flex md:col-span-2 xl:col-span-1">
        <WithdrawForm />
      </div>
      <div class="grid-span-1 md:col-span-2 xl:col-span-3 md:ml-8 sm:mt-0 mt-4">
        <LineChartContainer />
      </div>
    </div>
  );
};
