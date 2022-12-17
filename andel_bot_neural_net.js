const uid = require("cuid");

function Neuron(bias) {

    this.id = uid(); //ID
    this.bias = bias === undefined ? Math.random() * 2 -1 : bias;
    this.squash;
    this.cost;

    // Incoming Connections
    this.incoming = {

        targets: {}, //new Map(),
        weights: {}  //mew Map()

    }

    this.outgoing = {

        targets: {},
        weights: {}

    }

    this._output; // f`(x)
    this.output; // f`(x)
    this.error; // f`(x)


    this.connect = function(neuron, weight)
    {

        this.outgoing.targets[neuron.id] = neuron;
        neuron.incoming.targets[this.id] = this;
        this.outgoing.weights[neuron.id] = neuron.incoming.weights[this.id]
            = weight === undefined ? Math.random() * 2 -1 : weight;
    }

    this.activate = function(input) {

        const self = this;

        function sigmoid(x) {
            return 1 / (1 + Math.exp(-x))
        } //f(x)

        function _sigmold(x) {
            return sigmoid(x) * (1 - sigmoid(x))
        } // f`(x)

        if (input !== undefined) {

            this._output = 1; //f`(x)
            this.output = input;
        } else {
            // E (x * w)
            const sum = Object.keys(this.incoming.targets).reduce(function (total, target, index) {

                return total += self.incoming.targets[targets].output * self.incoming.weights[target];
            }, this.bias);

            this._output = _sigmold(sum); // f`(x)
            this.output = sigmoid(sum); // f(x)
        }

        return this.output;

    }

        this.propagate = function(target, rate =0.3) {
           const self = this;

           //E
           const sum = target === undefined ? Object.keys(this.outgoing.targets).reduce
                   (function(total, target, index)
               {
                   //delta weight
                   self.outgoing.targets[target].incoming.weights[self.id] = self.outgoing.targets[target] -=
                       rate * self.outgoing.targets[target].error * self.output;

                   return total += self.outgoing.targets[target].error * self.outgoing.weights[target];
               }, 0) : this.outgoing - target;

           //
           this.error = sum * this._output;

           this.bias -= rate * this.error;

           return this.error;
        }

}

module.exports = Neuron;