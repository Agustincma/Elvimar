import UserCardComponent from "@/components/cards/UserCardComponent";
import UserClientFullDataComponent from "@/components/cards/UserClientFullDataComponent";
import DrawerComponent from "@/components/navbar/DrawerComponent";
import GeneralLayout from "@/layouts/GeneralLayout";
import UserLayout from "@/layouts/UserLayout";

export default function Home() {
  return (
    <div>
      {/* <UserLayout/> */}
      {/* <DrawerComponent/> */}
    <GeneralLayout>
      <UserLayout />
    </GeneralLayout>

    </div>
  );
}
