from PIL import Image

def remove_white_background(input_path, output_path, tolerance=200):
    img = Image.open(input_path)
    img = img.convert("RGBA")
    
    datas = img.getdata()
    newData = []
    
    for item in datas:
        # If pixel is close to white (R, G, B > tolerance)
        if item[0] > tolerance and item[1] > tolerance and item[2] > tolerance:
            # Change all white (also shades of whites)
            # pixels to transparent
            newData.append((255, 255, 255, 0))
        else:
            newData.append(item)
            
    img.putdata(newData)
    img.save(output_path, "PNG")

if __name__ == "__main__":
    remove_white_background("public/kolte-patil-logo.jpg", "public/kolte-patil-logo.png")
