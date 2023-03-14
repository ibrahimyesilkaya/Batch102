({
    handleCaptureEvent : function(component, event, helper) {
        alert("Event, parent componentta Capture fazinda handle edildi");
    },
    handleBubbleEvent : function(component, event, helper) {
        alert("Event, parent componentta Bubble fazinda handle edildi");
    }
})