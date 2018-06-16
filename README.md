# Ng module base routing structure sample

-----------------------------------------------------------------------------------------------------------------------------------------------------------

**Module List**

- Module base routing excluding user components
  - AppModule ( root module )
  - AdminModule
    - component
      - users component
  - FrontModule
  - GuideModule
  - ProjectModule

![스크린샷 2017-12-19 오전 11.37.28](https://github.com/heeyoun-song/ng-module-base-routing-structure-sample/blob/master/images/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202017-12-19%20%EC%98%A4%EC%A0%84%2011.37.28.png?raw=true)

-----------------------------------------------------------------------------------------------------------------------------------------------------------

**Route**

- Routing from the root AppModule to the AdminModule and the FrontModule with lazy loading
  - AdminModule
    - The Users component is located under the AdminModule.
  - FrontModule
    - ProjectModule
    - GuideModule
    - The frontModule is routed to the project and guide module below

![스크린샷 2017-12-19 오전 10.58.11](https://github.com/heeyoun-song/ng-module-base-routing-structure-sample/blob/master/images/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202017-12-19%20%EC%98%A4%EC%A0%84%2010.58.11.png?raw=true)
