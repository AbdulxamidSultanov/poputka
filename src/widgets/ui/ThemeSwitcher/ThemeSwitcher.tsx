"use client"

import { ChangeEvent } from "react";
import { useTheme } from "next-themes";
import {useHasMounted} from "@/widgets/lib/useHasMounted/useHasMounted";

function ThemeSwitcher() {
    const mounted = useHasMounted()
    const { theme, setTheme } = useTheme();

    if (!mounted) {
        return (
            <select disabled>
                <option>Loading...</option>
            </select>
        );
    }

    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setTheme(e.target.value);
    };

    return (
        <select value={theme ?? "system"} onChange={handleChange}>
            <option value="system">System</option>
            <option value="dark">Dark</option>
            <option value="light">Light</option>
        </select>
    );
}

export default ThemeSwitcher;