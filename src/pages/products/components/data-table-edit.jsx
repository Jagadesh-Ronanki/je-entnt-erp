import { PlusCircledIcon } from "@radix-ui/react-icons";
import { Button } from "../../../components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../../components/ui/dialog";
import { Input } from "../../../components/ui/input";
import { Label } from "../../../components/ui/label";

function DataTableEdit({ row }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default" className="mr-2">
          <PlusCircledIcon className="mr-2 h-4 w-4" />
          Add Product
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Edit Product</DialogTitle>
          <DialogDescription>
            Make necessary changes. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="flex flex-col lg:grid lg:grid-cols-4 lg:items-center lg:gap-4">
            <Label htmlFor="name" className="pb-2 font-bold">
              Name
            </Label>
            <Input
              id="name"
              defaultValue={row.name}
              className="col-span-3"
            />
          </div>
          <div className="flex flex-col lg:grid lg:grid-cols-4 lg:items-center lg:gap-4">
            <Label htmlFor="category" className="pb-2 font-bold">
              Category
            </Label>
            <Input
              id="category"
              defaultValue={row.category}
              className="col-span-3"
            />
          </div>
          <div className="flex flex-col lg:grid lg:grid-cols-4 lg:items-center lg:gap-4">
            <Label htmlFor="price" className="pb-2 font-bold">
              Price
            </Label>
            <Input
              id="price"
              defaultValue={row.price}
              className="col-span-3"
            />
          </div>
          <div className="flex flex-col lg:grid lg:grid-cols-4 lg:items-center lg:gap-4">
            <Label htmlFor="stockQuantity" className="pb-2 font-bold">
              Stock Quantity
            </Label>
            <Input
              id="stockQuantity"
              defaultValue={row.stockQuantity}
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export { DataTableEdit };
