import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog"
import { LogOut, TriangleAlert } from "lucide-react";
import { useRouter } from "next/navigation";

interface LogoutModalProps {
  logout: string;
  className: string;
}

const LogoutModal = ({ logout, className }: LogoutModalProps) => {
  const router = useRouter()
  const logOut = async () => {
    await fetch('/dashboard/api/logout')
    router.push('/signin')
  }
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className={className} variant="outline"><LogOut />{logout}</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-[#ffff] py-8 rounded-[1rem]">

        <div className=" flex justify-center">
        <div className="w-14 h-14 flex items-center justify-center border-[6px] border-red-100 rounded-full bg-red-200">
          <TriangleAlert className="text-red-500" size={30} />
        </div>
        </div>
        <DialogHeader >
          <DialogTitle className="text-center text-2xl mb-1">Confirm Logout</DialogTitle>
          <DialogDescription className="text-center text-sm text-gray-500">
            Are you sure you want to logout? You&apos;ll need to sign in again to access your account.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="">
        <DialogClose asChild>
            <Button type="button" variant="secondary" className="border-none cursor-pointer text-[15px]" >
              Cancel
            </Button>
          </DialogClose>
          <Button type="button" onClick={logOut} className="bg-[#1f2937] rounded-[2rem] text-white hover:bg-[#1f2929]">
            Logout
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default LogoutModal