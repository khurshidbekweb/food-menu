import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const Language = () => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>Uz</DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem>Uz</DropdownMenuItem>
                <DropdownMenuItem>Ru</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default Language;