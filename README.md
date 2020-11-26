# Accordion Template

A template to create a Q&A section or similar. 

## Getting Started

All you need to do is to replace Lorem Ipsum texts in data.js with your own texts.


### Prerequisites

I´ve used CSSTransition ( from react-transition-group ) to create an animation between a closed and opened state (see Accordion.js). 
See react-transition-group documentation for more info.

```
<CSSTransition 
        mountOnEnter
        unmountOnExit
        in={showInfo}
        timeout={animationTiming}
        classNames="question-container">
          
          {state => (
            <p>{info}</p>
        )}

</CSSTransition>
```

### Installing


```
npm install --save
```

For react-transition-group

```
npm install react-transition-group --save
```

## Built With

* React.js
 

## Authors

* **Bruno Marijuan**


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details


