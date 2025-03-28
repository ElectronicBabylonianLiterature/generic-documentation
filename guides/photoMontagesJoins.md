# How to Create Photo Montages of Tablets to Check Joins

## Summary
1) [Choose Layer Order for Fragments](#1-choose-layer-order-for-fragments)  
2) [Create Empty Black Canvas onto Which to Fit Both Fragments](#2-create-empty-black-canvas-onto-which-to-fit-both-fragments)  
3) [Load Images into GIMP](#3-load-images-into-gimp)  
4) [Crop Image of Background Fragment](#4-crop-image-of-background-fragment)  
5) [Crop and Clip Image of Foreground Fragment](#5-crop-and-clip-image-of-foreground-fragment)  
6) [Copy Prepared Images and Paste Them onto Empty Canvas](#6-copy-prepared-images-and-paste-them-onto-empty-canvas)  
7) [Rearrange Fragments on Canvas](#7-rearrange-fragments-on-canvas)  
8) [Add Description Label and Crop Photomontage](#8-add-description-label-and-crop-photomontage)  

# Detailed Instructions
## <a id="1-choose-layer-order-for-fragments"></a>1) Choose Layer Order for Fragments
* For a convincing photomontage of a join, you need to choose a suitable layer order 
for the two joining fragments:
* The foreground fragment should be the one with the clearer break edge, so that only 
the inscribed surface and no sub-surface parts of the foreground fragment 
will cover the background fragment:

| foreground fragment | background fragment |
| :---: | :---: |
| <img src="images/photomon_fg-frag.png" width="50%"> | <img src="images/photomon_bg-frag.png" width="50%"> |

## <a id="2-create-empty-black-canvas-onto-which-to-fit-both-fragments"></a>2) Create Empty Black Canvas onto Which to Fit Both Fragments
* Click on **[File]** > **[New...]**
* In the dialog, choose approximate height and width of canvas 
so that it is big enough for both fragments
* Click on **[+]** to the left of **Advanced Options**
* Set **Fill with:** to **Foreground colour** (which by default is black)
* Confirm by clicking on **[OK]**

## <a id="3-load-images-into-gimp"></a>3) Load Images into GIMP
For both images do the following:
* Copy image to clipboard
* In GIMP, insert image into new canvas: **[File]** > **[Create]** > **[From Clipboard]**

## <a id="4-crop-image-of-background-fragment"></a>4) Crop Image of Background Fragment
* Select _Crop Tool_ by clicking on **[<img src="images/photomon_crop.png" width="3%">]** or by pressing **[Shift]** + **[C]**
* Drag a margin around the part of the image you want to use in the photomontage
* Confirm by hitting **[Enter]**

## <a id="5-crop-and-clip-image-of-foreground-fragment"></a>5) Crop and Clip Image of Foreground Fragment
* Switch to image of foreground fragment by clicking on the respective thumbnail image 
at the top margin of the window

<img src="images/photomon_header.png" width="40%">

* Again, select _Crop Tool_ and crop image to the desired section. This time, it is important that your cropped image only leaves one side of the foreground fragment and has it completely surrounded by an even (black) background

| correct cropping section | problematic cropping section |
| :---: | :---: |
| <img src="images/photomon_cropping-1.png" width="50%"> | <img src="images/photomon_cropping-2.png" width="50%"> |

* Select _Fuzzy Select Tool_ by clicking on **[<img src="images/photomon_fuzzy.png" width="3%">]** or by pressing **[U]**
* Click anywhere in the even background. This will select everything but the fragment
* Now, invert this selection by pressing **[CTRL]** + **[I]**

## <a id="6-copy-prepared-images-and-paste-them-onto-empty-canvas"></a>6) Copy Prepared Images and Paste Them onto Empty Canvas
* Switch to background fragment and copy it to clipboard (**[CTRL]** + **[C]**)
* Switch to empty canvas and paste as new layer (**[Edit]** > **[Paste as]** > **[New Layer]**)
* Repeat with foreground fragment

## <a id="7-rearrange-fragments-on-canvas"></a>7) Rearrange Fragments on Canvas
* Transform fragments to make them join neatly
* For this, select layer you would like to transform by clicking on the respective thumbnail image 
in the layer bar to the right of the window

<img src="images/photomon_layers.png" width="30%">

* The main tools you will need to transform fragments are:
	* The _Move Tool_ (**[<img src="images/photomon_move.png" width="3%">]** or **[M]**)
	* The _Rotate Tool_ (**[<img src="images/photomon_rotate.png" width="3%">]** or **[Shift]** + **[R]**)
	* The _Scale Tool_ (**[<img src="images/photomon_transf.png" width="3%">]** or **[Shift]** + **[T]**) - hold **[Shift]** to maintain aspect ratio

## <a id="8-add-description-label-and-crop-photomontage"></a>8) Add Description Label and Crop Photomontage
* You can add a description label to indicate which fragments you have joined
* For this, select _Text Tool_ (**[<img src="images/photomon_text.png" width="2%">]** or **[T]**)
* Click where you want to add your label to the canvas
* Type in the information you would like to give
* Change font size and colour by first selecting what you have typed (**[CTRL]** + **[A]**)
and then changing the necessary parameters in the menu above your text
* Remove any excess margins of the photomontage by cropping it with the _Crop Tool_
