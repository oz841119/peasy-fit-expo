import Ionicons from "@expo/vector-icons/Ionicons";
import { LinkProps, Tabs } from "expo-router";

export default function RootLayout() {
  const tabs: { name: string; href: LinkProps['href']; icon?: keyof typeof Ionicons.glyphMap }[] = [
    { name: 'home', href: '/home', icon: 'home-outline' },
    // { name: 'add-workout', href: '/add-workout', icon: 'add-circle' },
    // { name: 'profile', href: '/profile', icon: 'person-outline' },
  ] as const;
  return (
    <Tabs>
      {
        tabs.map((tab, index) => (
          <Tabs.Screen
            key={index}
            name={tab.name}
            options={{
              title: tab.name,
              href: tab.href,
              tabBarIcon: ({ color, size }) => (
                <Ionicons name={tab.icon} size={size} color={color} />
              ),
            }}
          />
        ))
      }
    </Tabs>
  );
}
