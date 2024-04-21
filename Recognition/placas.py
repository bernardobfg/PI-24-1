import cv2

img = cv2.imread('images/carro3.jpeg')
cv2.imshow('Carro', img)

cinza = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
# cv2.imshow('cinza', cinza)

_, bin = cv2.threshold(cinza, 90,255, cv2.THRESH_BINARY)
#cv2.imshow('bin', bin)


desfoque = cv2.GaussianBlur(bin, (5,5), 0)
#cv2.imshow('desfoque', desfoque)

contornos, hierarchy = cv2.findContours(desfoque, cv2.RETR_TREE, cv2.CHAIN_APPROX_NONE)

#cv2.drawContours(img, contornos, -1, (0,255,0), 2)
#cv2.imshow('contornos', img)

for c in contornos:
  perimetro = cv2.arcLength(c, True)
  if(perimetro > 120):
    aprox = cv2.approxPolyDP(c, 0.3 * perimetro, True)
    if len(aprox == 4):
      (x, y, lar, alt) = cv2.boundingRect(c)
      if(lar > 2 * alt and lar < 5 * alt):
        cv2.rectangle(img, (x,y), (x+lar, y+alt), (0,255,0), 2)
        roi = img[y: y+alt, x:x+lar]
        cv2.imwrite("results/roi.jpg",  roi)

cv2.imshow('rect', img)
cv2.waitKey(0)

cv2.destroyAllWindows()