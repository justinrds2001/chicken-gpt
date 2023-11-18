"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.png";
import { UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useState } from "react";
import AddEditNoteDialog from "@/components/add-edit-note-dialog";
import ThemeToggleButton from "@/components/theme-toggle-button";
import { dark } from "@clerk/themes";
import { useTheme } from "next-themes";
import AiChatButton from "@/components/ai-chat-button";

export default function NavBar() {
  const { theme } = useTheme();

  const [showAddEditNoteDialog, setAddEditNoteDialog] = useState(false);

  return (
    <>
      <div className="p-4 shadow">
        <div className="max-w-8xl flex flex-wrap items-center justify-between gap-3">
          <Link href="/notes" className="flex items-center gap-1">
            <Image src={logo} alt="Chicken GPT Logo" width={40} height={40} />
            <span className="font-bold">Chicken GPT</span>
          </Link>
          <div className="flex items-center gap-2">
            <UserButton
              afterSignOutUrl="/"
              appearance={{
                baseTheme: theme === "dark" ? dark : undefined,
                elements: {
                  avatarBox: {
                    width: "2.5rem",
                    height: "2.5rem",
                  },
                },
              }}
            />
            <ThemeToggleButton />
            <Button onClick={() => setAddEditNoteDialog(true)}>
              <Plus size={20} className="mr-2" />
              Add Note
            </Button>
            <AiChatButton />
          </div>
        </div>
      </div>
      <AddEditNoteDialog
        open={showAddEditNoteDialog}
        setOpen={setAddEditNoteDialog}
      />
    </>
  );
}
