from pathlib import Path

from PIL import Image


image_path = Path(__file__).parent.parent / "public/packaging/catbio-max.png"
image = Image.open(image_path).convert("RGBA")
alpha_bounds = image.getchannel("A").getbbox()

if alpha_bounds is None:
    raise RuntimeError("Catbio image has no visible pixels")

trimmed = image.crop(alpha_bounds)
trimmed.save(image_path, optimize=True)
print(f"{image.size[0]}x{image.size[1]} -> {trimmed.size[0]}x{trimmed.size[1]}")
