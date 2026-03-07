import { FC } from "react";
import { Cow } from "../shared/types";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Divider,
  Typography,
} from "@mui/material";
import { calculateCowPrice } from "../shared/cowMath";

interface CowCardProps {
  cowDetails: Cow;
  onBuy?: () => void;
  onRent?: () => void;
}

export const CowCard: FC<CowCardProps> = ({ cowDetails, onBuy, onRent }) => {
  const {
    age,
    grassPreference,
    breed,
    name,
    favoriteBeer,
    heightInMeters,
    funFact,
    weightInKg,
    isReligious,
    image,
  } = cowDetails;
  return (
    <Card className="max-w-sm rounded-2xl shadow-lg hover:shadow-xl transition duration-300 flex flex-col">
      {/* Image + Tag */}
      <div className="relative">
        <CardMedia
          component="img"
          image={image}
          alt={name}
          className={`h-48 w-full object-cover`}
        />

        {isReligious && (
          <div className="absolute top-2 right-2">
            <Chip
              label="✡️ Religious"
              color="secondary"
              className="shadow-md"
            />
          </div>
        )}
      </div>

      <CardContent className="flex flex-col gap-3 flex-grow">
        {/* Name */}
        <Typography variant="h5" className="font-bold text-center">
          {name}
        </Typography>

        {/* Breed + Age */}
        <div className="flex justify-between">
          <Chip label={`🐄 ${breed}`} />
          <Chip label={`🎂 ${age} yrs old`} />
        </div>

        <Divider />

        {/* Details */}
        <div className="flex flex-col gap-1 text-sm">
          <p>
            <strong>🌿 Grass:</strong> {grassPreference}
          </p>
          <p>
            <strong>🍺 Beer:</strong> {favoriteBeer}
          </p>
          <p>
            <strong>📏 Height:</strong> {heightInMeters} m
          </p>
          <p>
            <strong>⚖️ Weight:</strong> {weightInKg} kg
          </p>
        </div>

        <Divider />

        {/* Price */}
        <Typography variant="h6" className="text-center font-semibold">
          💰 ${calculateCowPrice(cowDetails)}
        </Typography>

        {/* Fun Fact */}
        <Typography className="italic text-gray-600 text-center">
          "{funFact}"
        </Typography>

        <div className="flex gap-2 mt-auto">
          {/* Actions */}
          {onBuy && (
            <Button
              variant="contained"
              color="success"
              fullWidth
              onClick={onBuy}
            >
              Buy
            </Button>
          )}

          {onRent && (
            <Button
              variant="outlined"
              color="primary"
              fullWidth
              onClick={onRent}
            >
              Rent
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
