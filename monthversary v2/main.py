from kivy.app import App
from kivy.uix.label import Label
from kivy.uix.boxlayout import BoxLayout
from kivy.uix.image import Image
from kivy.uix.button import Button
from kivy.core.window import Window
from kivy.uix.popup import Popup

# Warna background
Window.clearcolor = (1, 0.9, 0.95, 1)  # pink soft

class MonthversarryApp(App):
    def build(self):
        layout = BoxLayout(orientation='vertical', padding=20, spacing=15)

        # Judul
        title = Label(
            text="💖 Happy Monthversarry 💖",
            font_size='30sp',
            color=(0.9, 0, 0.6, 1),
            bold=True
        )

        # Tambah gambar hati
        img = Image(source="heart.png")  # bikin file heart.png, bisa gambar hati lucu

        # Ucapan
        message = Label(
            text="Kasya ❤️ Pacarku\n"
                 "Semoga hubungan kita selalu langgeng,\n"
                 "penuh cinta & kebahagiaan ✨",
            font_size='20sp',
            color=(0.3, 0.1, 0.5, 1),
            halign="center"
        )

        # Tombol interaktif
        btn = Button(
            text="Klik aku 💕",
            font_size='18sp',
            background_color=(0.9, 0.3, 0.6, 1),
            color=(1, 1, 1, 1),
            size_hint=(1, 0.2)
        )
        btn.bind(on_press=self.show_popup)

        layout.add_widget(title)
        layout.add_widget(img)
        layout.add_widget(message)
        layout.add_widget(btn)

        return layout

    def show_popup(self, instance):
        popup = Popup(
            title="💌 Special Message 💌",
            content=Label(
                text="I Love Youuu ❤️\n"
                     "Happy Monthversarry ke-3 🥰",
                font_size='22sp',
                color=(1, 0, 0.5, 1)
            ),
            size_hint=(0.8, 0.4),
            auto_dismiss=True
        )
        popup.open()

if __name__ == "__main__":
    MonthversarryApp().run()
