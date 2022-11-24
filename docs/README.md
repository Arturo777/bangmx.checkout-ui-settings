# Checkout UI Settings

The Checkout UI Settings app is responsible for **customizing your store's Checkout UI through scripts**.

The main advantage of using the app instead of the [store's admin](https://help.vtex.com/tutorial/configure-template-in-smartcheckout-update--ToTE5XB39t0SwtHgpgwSv?locale=en) for this customization is that your Checkout scripts will behave as configurations for platform apps.

In practice, it means that Checkout UI Settings allows A/B testing in your store's scripts, in addition to the possibility of quick rollbacks for old scripts (i.e. scripts pertaining to older Checkout UI Settings app's versions).

## Configuration

1.  Using your terminal and the [VTEX IO Toolbelt](https://vtex.io/docs/recipes/development/vtex-io-cli-installment-and-command-reference), log into the desired account;
2.  Run `vtex list` to access the list of apps that are already installed on the account you're working on. If the Checkout UI Settings option already exists, you can skip to step 7 of this step-by-step;
3.  If the Checkout UI Settings app was not found in the list of installed apps, run the `vtex init` command;
4. Select the `checkout-ui-settings` option;
5.  Open the `checkout-ui-settings`  app in whichever code editor you prefer;
6.  In the  `manifest.json`  file, change the predefined default value  `vendor`  to the name of the account in which you want to install the app;
7.  In the  `checkout-ui-custom`  folder, create the files in which the scripts will be included, just as you would do in the [admin's interface](https://help.vtex.com/tutorial/configure-template-in-smartcheckout-update--ToTE5XB39t0SwtHgpgwSv?locale=en#configure-code). Notice that a few defaults files already exist in the `checkout-ui-custom` folder, files which you can use to insert the scripts;
8.  According to the Checkout customization you are looking for, open the most suitable file and insert the desired scripts;
9.  Save your changes. Then, [publish](https://vtex.io/docs/recipes/development/publishing-an-app) the app's new version;
10. Still logged into the desired account, [create a production workspace](https://vtex.io/docs/recipes/development/creating-a-production-workspace) and [install the app](https://vtex.io/docs/recipes/development/installing-an-app);
10. If everything is working as expected, [promote the workspace to master](https://vtex.io/docs/recipes/development/promoting-a-workspace-to-master).

## Modus Operandi 

Once the app is deployed and installed in the account, every scripts contained in it will be automatically linked to your store and used to [build the templates](https://help.vtex.com/tutorial/configure-template-in-smartcheckout-update--ToTE5XB39t0SwtHgpgwSv?locale=en#configuring-templates-from-the-code-menu) to customize your Checkout.


:warning: **Scripts used by Checkout are linked to the Checkout UI Settings version that's installed in your store**. If a prior app version was already installed and your want to change the scripts linked to it, you'll need to repeat the already existing code and thereafter launch the app's new version containing the changes you just did. Housekeeper is responsible for updating app versions in the accounts it's installed in.

## Thank you page
https://uat.bang-olufsen.com/es/mx/orders?id={cartid}



## Redirect to checkout cart


### Elemplo de redirect
https://checkout--bangmx.myvtex.com/checkout/cart/add/?sku=1734013&qty=1&seller=1&sc=1&sku=1200465&qty=1&seller=1&sc=1&

### Item no disponible:
https://checkout--bangmx.myvtex.com/checkout?cartId=tFXRtvGpdjsZyD_8JoVHwHfWgQG1HdAbt1XV8Ix7RMPzeDh_-h4mHkpfHGS3uIok/#/cart

### Carrito vacío:
https://checkout--bangmx.myvtex.com/checkout?cartId=m-AHQgXS0zdRhCTU3YItKKtrP78nrLQus7MMPeaalZJ2f-jM5kylMnKi3JWpVBaD/#/cart

### Get Cart Failed: 
```
{
    "code": "APICD001",
    "text": "Get cart failed",
    "statusCode": 200,
    "switchToCountry": null,
    "type": "getCartFailed"
}
```
https://checkout--bangmx.myvtex.com/checkout?cartId=mE2WFNBcgT7EsdM9dWh-Zkv7GbQpkTqxycxuMaefNmwsVXXvO70GRgUsxRPTcmN7/#/cart

### Empty cart: 
```
{}
```
https://checkout--bangmx.myvtex.com/checkout?cartId=vbmnQ4ILiGuaVjRlvGOdMxs0n9RTj3olzyl4SvCYkThBkElgYjEz4864afKMYutp/#/cart

### Empty cart: 
```
{}
```
https://checkout--bangmx.myvtex.com/checkout?cartId=SV6pBSvIY7pdHu2ze9FmSrmJlUXSUyel17xMKAGEdUQhreQYg3NHvb3dshOCWn9v/#/cart

### item 1108771 not available:
https://checkout--bangmx.myvtex.com/checkout?cartId=H6lIbf1bPj2fACO2aRZSeRGul7u4A_3JRsB-7BHfmdboRq2zviSMDcP-HXqkvKBo/#/cart

### item 1666518 not available:
https://checkout--bangmx.myvtex.com/checkout?cartId=GtJVwv9le3qXgub3uXxoz3SVZ06L2AqJ5etkS0BWrOXQK8seFgZFjN3KXa1O64kA/#/cart

### Empty cart:
https://checkout--bangmx.myvtex.com/checkout?cartId=71B_4UveB92ctpGCLRbBVvbUn0AkkoYCkrNcAz3DjLL1lLVDGiEEfX7nqXVBH-L1/#/cart
https://devcheckout--bangmx.myvtex.com/checkout?cartId=EAGA3Nk5aEJ25tnXejcYdFxXp4z43iznDdJnB1fjwnC9mCwLSq5mLjtRrclPDS3o/#/cart

### Error:
```
"error": {
        "code": "APICD001",
        "text": "Get cart failed",
        "statusCode": 200,
        "switchToCountry": null,
        "type": "getCartFailed"
    }
```
https://checkout--bangmx.myvtex.com/checkout?cartId=WNdNLkb1f5hvJ_dwjz5OGmP5T9EXf3DVEbQ6TRLpXV-JqDFYH9SkXuMtYk1iQgjn/#/cart

### Empty cart:
https://checkout--bangmx.myvtex.com/checkout?cartId=ZvwxPuqhdSiEyqTAbxw629xY_Y9h7XFQ3Mj9FEhpe7ItGefT-M6HPyR2-L2deKri/#/cart

### 2 products:
https://checkout--bangmx.myvtex.com/checkout?cartId=32TVbysyEXydCivABTpjytnhnSN1svgsszuC81nFJglPB786N6U3jdmLilfGl8YS/#/cart

## Latest carts

### 2 skus
- 1235400
- 1235402
https://checkout--bangmx.myvtex.com/checkout?cartId=cartId=SzXvcIzkqluUBwnkJvay8KFEZmugd2YAIcMT6hmUfTWK8CAJ-jYzS9eBl3w1TkQ0/#/cart

### 1 skus
- 1240000
https://checkout--bangmx.myvtex.com/checkout?cartId=dbzBVJ8Jr7ATh077PYNUcpVRVifAMM9Sr3onk1tEuWQzS3NqMpo_971-r1F2vp2W/#/cart
https://testprod--bangmx.myvtex.com/checkout?cartId=dbzBVJ8Jr7ATh077PYNUcpVRVifAMM9Sr3onk1tEuWQzS3NqMpo_971-r1F2vp2W/#/cart

### 2 skus
- 1626000
- 1626004
https://checkout--bangmx.myvtex.com/checkout?cartId=IVgAccYpvZrxHcSFZwQOLH7RVdaOndytfJN1V7WIJPMjuC3Ng3swGywYq7PnWbKZ/#/cart

### 2 skus
- 1646300
- 1646301 
https://checkout--bangmx.myvtex.com/checkout?cartId=RYH3gm0Mi1YhB5G63vgd5lI6lEtazu2AAw54E-haMFigGm_4a3iHqa9AmqkaqsfA/#/cart

Thank you page
https://uat.bang-olufsen.com/es/mx/orders?id=RYH3gm0Mi1YhB5G63vgd5lI6lEtazu2AAw54E-haMFigGm_4a3iHqa9AmqkaqsfA

### 1 sku
- 1734002
https://checkout--bangmx.myvtex.com/checkout?cartId=624XboElPZkB-msnZTQkpV4ohdxZdIacHwlDzt9PMAkesqzNks530R3G9ngh4qGa/#/cart

### 1 sku
- 1626000
https://devcheckout--bangmx.myvtex.com/checkout?cartId=EAGA3Nk5aEJ25tnXejcYdFxXp4z43iznDdJnB1fjwnC9mCwLSq5mLjtRrclPDS3o/#/cart

https://checkout--bangmx.myvtex.com/checkout?cartId=EAGA3Nk5aEJ25tnXejcYdFxXp4z43iznDdJnB1fjwnC9mCwLSq5mLjtRrclPDS3o/#/cart

### 2 skus
- 1224000
- 1224001 
https://checkout--bangmx.myvtex.com/checkout?cartId=u6yX9EqdoWpv6dMeAOOZpNIzdM2Yjz1AVaqv4n46jCD6CGfdno4W0uDyUTidkU0C/#/cart

### 2 skus
- 1734012
- 1734013 – {"id":"8OMWdmJ42siH_3AAirlrdi3OYyJkd1L-h8bJwd42OGQDs2ZzDryNcJD9z0wrZ818","version":3}
https://checkout--bangmx.myvtex.com/checkout?cartId=8OMWdmJ42siH_3AAirlrdi3OYyJkd1L-h8bJwd42OGQDs2ZzDryNcJD9z0wrZ818/#/cart

CURL: 
curl --location --request GET 'https://beoecommerceapimanagementuat.azure-api.net/api/tpecomoperations/v1/cart?id=8OMWdmJ42siH_3AAirlrdi3OYyJkd1L-h8bJwd42OGQDs2ZzDryNcJD9z0wrZ818' \
--header 'Country: MX' \
--header 'Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjZmZWNlN2FjLWYzNTMtNDAwMi04MTM3LTY2ZDUwNzMyMTYwNSIsIm5iZiI6MTY2NjYzMTgzNCwiZXhwIjoxNjY3MjM2NjM0LCJpYXQiOjE2NjY2MzE4MzR9.1cNNVkU4hiwdds3zcFz6UsIuuNbcglQV16MD5BRvoGo' \
--header 'Locale: en'

response:
{
    "error": {
        "code": "APICD001",
        "text": "Get cart failed",
        "statusCode": 200,
        "switchToCountry": null,
        "type": "getCartFailed"
    }
}

### 1 skus
{
  "name": "Beosound A1 2nd Gen",
  "sku": "1734012",
}
https://devcheckout--bangmx.myvtex.com/checkout?cartId=5LU5bchMe9NHnhQBjzqn9f0Of815i9SM4XYpMdwoLv2Gk977BcuJfGj1mdRFosap/#/cart
https://checkout--bangmx.myvtex.com/checkout?cartId=5LU5bchMe9NHnhQBjzqn9f0Of815i9SM4XYpMdwoLv2Gk977BcuJfGj1mdRFosap/#/cart

### 1 skus
{}
https://devcheckout--bangmx.myvtex.com/checkout?cartId=mEZBxNUT2LcOfNluMqzFuBXUKYtITSOzLW3p9limvoa8HWhc3GXT84OXpjVUTKRx/#/cart
